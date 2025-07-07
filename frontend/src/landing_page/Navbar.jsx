import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Signup", to: "/signup" },
  { name: "Login", to: "/login" },
  { name: "About", to: "/about" },
  { name: "Products", to: "/product" },
  { name: "Pricing", to: "/pricing" },
  { name: "Support", to: "/support" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const location = useLocation();

  return (
    <Disclosure
      as="nav"
      className="fixed top-0 w-full z-50 bg-slate-100 text-[#0f172a] backdrop-blur"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-20 items-center justify-between sm:justify-between">
          {/* Mobile menu toggle */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden z-50">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-[#0f172a] hover:bg-[#0f172a]/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0f172a]">
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block h-6 w-6 data-[headlessui-state=open]:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden h-6 w-6 data-[headlessui-state=open]:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          
          <div className="flex flex-1 justify-center text-xl">
            <Link
              to="/"
              className="text-xl sm:text-3xl font-extrabold tracking-wide bg-gradient-to-br from-[#0f172a] to-[#134e4a] bg-clip-text text-transparent leading-tight"
            >
              AlgoNest
            </Link>
          </div>

          
          <div className="hidden sm:flex space-x-4">
            {navigation.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <Link
                  key={item.name}
                  to={item.to}
                  className={classNames(
                    isActive
                      ? "bg-[#0f172a]/10 text-[#0f172a]"
                      : "hover:bg-[#0f172a]/10 hover:text-[#0f172a]",
                    "rounded-md px-3 py-2 text-lg font-medium"
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => {
            const isActive = location.pathname === item.to;
            return (
              <DisclosureButton
                key={item.name}
                as={Link}
                to={item.to}
                className={classNames(
                  isActive
                    ? "bg-[#0f172a]/10 text-[#0f172a]"
                    : "hover:bg-[#0f172a]/10 hover:text-[#0f172a]",
                  "block rounded-md px-3 py-2 text-xl font-medium"
                )}
              >
                {item.name}
              </DisclosureButton>
            );
          })}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

