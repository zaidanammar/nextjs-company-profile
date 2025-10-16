import { COMPANY_INFO, SOCIAL_LINKS } from "@/lib/shared/constants/footer";

export const Footer = () => {
  return (
    <footer className="bg-indigo-600 text-white mt-20">
      <div className="mx-auto max-w-7xl px-6 py-12 text-center md:text-left">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">{COMPANY_INFO.name}</h2>
            <p className="mt-2 max-w-md text-indigo-100">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div className="flex gap-4">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="rounded-full bg-white/10 p-3 transition hover:bg-white/20"
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="my-8 h-[1px] w-full bg-white/20" />

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-indigo-100 md:flex-row">
          <p>
            © {COMPANY_INFO.year} {COMPANY_INFO.name}. All rights reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <a
              href={COMPANY_INFO.author.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              {COMPANY_INFO.author.name}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
