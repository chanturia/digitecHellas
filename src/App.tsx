import { Theme } from './settings/types';
import {
  defaultVersionSlug,
  findMagicPathVersion,
  magicPathVersions,
  type MagicPathVersion,
} from './magicpathVersions';

let theme: Theme = 'light';

function getVersionSlugFromUrl() {
  const url = new URL(window.location.href);
  const queryVersion = url.searchParams.get('version');

  if (queryVersion) {
    return queryVersion;
  }

  const hash = url.hash.replace(/^#\/?/, '').split('/').filter(Boolean)[0];

  if (hash) {
    return hash;
  }

  const segments = url.pathname.split('/').filter(Boolean);

  if (segments[0] === 'versions') {
    return segments[1] ?? null;
  }

  return segments[0] ?? null;
}

function VersionPicker() {
  return (
    <main className="min-h-screen bg-[#0b0f14] px-6 py-10 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        <header className="flex flex-col gap-5 border-b border-white/10 pb-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#FEC21E]">
              Digitec Hellas MagicPath Versions
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-none tracking-tight md:text-7xl">
              Pick a design version.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-300">
              Each route renders one exported MagicPath variant inside this single React app.
            </p>
          </div>
          <a
            className="inline-flex rounded bg-[#FEC21E] px-5 py-3 text-sm font-black uppercase tracking-widest text-black hover:bg-[#AAC02D]"
            href={`/${defaultVersionSlug}`}
          >
            Open default
          </a>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {magicPathVersions.map((version) => (
            <a
              className="group border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-[#FEC21E] hover:bg-white/[0.08]"
              href={`/${version.slug}`}
              key={version.slug}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#AAC02D]">
                /{version.slug}
              </span>
              <h2 className="mt-4 text-2xl font-black leading-tight">{version.title}</h2>
              <p className="mt-3 min-h-14 text-sm leading-6 text-zinc-400">{version.description}</p>
              <span className="mt-6 inline-flex text-sm font-black uppercase tracking-widest text-[#FEC21E] group-hover:text-white">
                View version
              </span>
            </a>
          ))}
        </section>
      </div>
    </main>
  );
}

function VersionShell({ version }: { version: MagicPathVersion }) {
  const Component = version.component;

  return (
    <>
      <div className="fixed bottom-4 left-4 z-[9999] flex max-w-[calc(100vw-2rem)] items-center gap-2 rounded-full border border-white/15 bg-black/75 px-3 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur">
        <a className="rounded-full bg-white px-3 py-1 text-black" href="/">
          Versions
        </a>
        <span className="hidden max-w-[48vw] truncate sm:inline">{version.title}</span>
        <a className="rounded-full px-2 py-1 text-[#FEC21E] hover:bg-white/10" href={`?version=${version.slug}`}>
          ?version
        </a>
      </div>
      <Component />
    </>
  );
}

function NotFoundVersion({ slug }: { slug: string }) {
  return (
    <main className="grid min-h-screen place-items-center bg-[#111111] px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[#FEC21E]">
          Unknown version
        </p>
        <h1 className="mt-4 text-5xl font-black">No version named “{slug}”.</h1>
        <p className="mt-5 text-zinc-300">Use the version picker to open one of the exported MagicPath layouts.</p>
        <a
          className="mt-8 inline-flex rounded bg-[#FEC21E] px-5 py-3 text-sm font-black uppercase tracking-widest text-black"
          href="/"
        >
          Back to versions
        </a>
      </div>
    </main>
  );
}

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  const slug = getVersionSlugFromUrl();

  if (!slug) {
    return <VersionPicker />;
  }

  const version = findMagicPathVersion(slug);

  if (!version) {
    return <NotFoundVersion slug={slug} />;
  }

  return <VersionShell version={version} />;
}

export default App;
