import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Rss,
  Search,
  Twitter,
} from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const sidebarItems = [
  {
    name: "Investment Outlook",
    href: "/",
  },
  {
    name: "Market Commentary",
    href: "/recruitment",
  },
  {
    name: "Hedge Fund Strategies & Alternatives",
    href: "/hiring",
  },
  {
    name: "Inside Wealth",
    href: "/tech",
  },
  {
    name: "Private Capital Insights",
    href: "/career",
  },
  {
    name: "Compliance Watch",
    href: "/career",
  },
];

const BlogSidebar = () => {
  return (
    <div className="h-full hidden lg:w-1/5 lg:flex flex-col px-8">
      <div className="space-x-4 flex flex-col  gap-6 font-medium mt-8">
        <p className="text-xs">Categories</p>
        {sidebarItems.map((item, index) => (
          <Link
            className="hover:underline text-sm text-muted-foreground font-normal"
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="mt-16 flex flex-col space-x-8 gap-2">
        <p className="font-medium text-xs">Search</p>
        <div className="flex">
          <input className="border rounded-l-sm flex-1" />
          <div className="bg-[#00B4D8] flex items-center justify-center p-1.5 rounded-r-sm text-white">
            <Search className="size-5" />
          </div>
        </div>
      </div>
      {/* Newsletter */}
      <div className="space-y-2 mt-16">
        <h3 className="font-semibold text-card-foreground text-xs">
          Stay Updated
        </h3>
        <p className="text-muted-foreground text-xs">
          Subscribe to our newsletter for the latest articles and insights.
        </p>
        <div className="space-y-2">
          <Input
            placeholder="Enter your email"
            className="bg-background border-border"
          />
          <Button className="w-full bg-[#00B4D8]">
            <Mail className="mr-2 h-4 w-4" />
            Subscribe
          </Button>
        </div>
      </div>
      <div className="mt-16 flex flex-col space-x-8 gap-2">
        <p className="font-medium text-xs">Follow Us</p>
        <div className="flex space-x-2 text-[#00B4D8]">
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Facebook className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Instagram className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Rss className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BlogSidebar;
