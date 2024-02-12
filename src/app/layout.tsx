import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  Navbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  Button,
  NavbarMenu,
  NavbarMenuItem,
  Link,
} from "@nextui-org/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="dark text-foreground bg-background mx-auto min-h-dvh">
          <Navbar isBordered>
            <NavbarContent className="sm:hidden" justify="start">
              <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3" justify="center">
              <NavbarBrand>
                <p className="font-bold text-inherit">TBH</p>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <NavbarBrand>
                <p className="font-bold text-inherit">TBH</p>
              </NavbarBrand>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Features
                </Link>
              </NavbarItem>
              <NavbarItem isActive>
                <Link href="#" aria-current="page" color="warning">
                  Customers
                </Link>
              </NavbarItem>
              <NavbarItem>
                <Link color="foreground" href="#">
                  Integrations
                </Link>
              </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem className="hidden lg:flex">
                <Link href="#">Login</Link>
              </NavbarItem>
              <NavbarItem>
                <Button as={Link} color="secondary" href="#" variant="ghost">
                  Sign Up
                </Button>
              </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link
                    className="w-full"
                    color={
                      index === 2
                        ? "warning"
                        : index === menuItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href="#"
                    size="lg"
                  >
                    {item}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </Navbar>
          {children}
        </main>
      </body>
    </html>
  );
}
