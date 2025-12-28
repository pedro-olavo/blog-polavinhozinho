import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ISidenavItem {
  path: string;
  children: string;
}

export const SidenavItem = ({ path, children }: ISidenavItem) => {
  const pathname = usePathname();

  return (
    <Link href={path}>
      <h3
        className={clsx("font-title text-4xl text-sienna-300", {
          "text-sienna-600": pathname === `/${path}`,
        })}
      >
        {children}
      </h3>
    </Link>
  );
};
