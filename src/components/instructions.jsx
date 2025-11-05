import {
  Settings,
  Award,
  UserPlus,
  Play,
  Star,
  Info,
  ClipboardList,
  Lock,
  Search,
  List,
  Clipboard,
  Clock,
  CircleAlert,
} from "lucide-react";

import { NavLink } from "react-router-dom";

export function IntroCard() {
  return [
    {
      logo: <Settings size={40} className="mx-auto" />,
      title: "Set It Up",
      description:
        "Paste your giveaway post link and choose how many winners you want - simple and quick!",
    },
    {
      logo: <Award size={40} className="mx-auto" />,
      title: "Add Your Prize",
      description:
        "Tell us what's up for grabs! Whether it's cash, merch, or shoutouts - we've got you covered.",
    },
    {
      logo: <UserPlus size={40} className="mx-auto" />,
      title: "Fetch Participants",
      description:
        "Lucky Pick automatically collects all valid comments from your post - no stress, no manual work.",
    },
    {
      logo: <Play size={40} className="mx-auto" />,
      title: "Pick Your Winners",
      description:
        "Hit the draw button and watch the magic happen! Winners are chosen randomly and instantly.",
    },
  ];
}

export function ResultCard() {
  return [
    {
      logo: <Star size={40} className="mx-auto" />,
      title: "Fair & Random Winners",
      description:
        "Our system picks winners randomly - no bias, no favoritism, just pure luck!",
    },
    {
      logo: <Play size={40} className="mx-auto" />,
      title: "Easy to Use",
      description:
        "Simply paste your post link, fetch comments, and click to pick your winners instantly.",
    },
    {
      logo: <ClipboardList size={40} className="mx-auto" />,
      title: "Multiple Platforms",
      description:
        "Supports Facebook, X, Instagram, and TikTok - all in one place!",
    },
    {
      logo: <Info size={40} className="mx-auto" />,
      title: "Transparent Process",
      description:
        "Everything happens in real time so users can see that each draw is fair and random.",
    },
  ];
}

export function SecurityCard() {
  return [
    {
      logo: <Lock size={40} className="mx-auto" />,
      title: "Secure & Transparent",
      description:
        "Once a draw is done, results are locked to keep things fair and tamper-proof.",
    },
    {
      logo: <Search size={40} className="mx-auto" />,
      title: "Check Participation",
      description:
        "Participants can easily confirm they were included in the giveaway - full transparency!",
    },
    {
      logo: <List size={40} className="mx-auto" />,
      title: "Verified Entries",
      description:
        "Every comment fetched is tracked to make sure only valid participants are counted.",
    },
    {
      logo: <Clipboard size={40} className="mx-auto" />,
      title: "Public Results",
      description:
        "Winners are displayed clearly so everyone can see that the draw was 100% fair.",
    },
    {
      logo: <Clock size={40} className="mx-auto" />,
      title: "Recent Giveaways",
      description:
        "View your past draws and track all giveaway activities in one place.",
    },
    {
      logo: <CircleAlert size={40} className="mx-auto" />,
      title: "Built on Trust",
      description:
        "Lucky Pick uses random algorithms and secure processes to keep every giveaway honest.",
    },
  ];
}

export function ToolCard() {
  return [
    {
      img: "./facebook.png",
      customNav: (
        <NavLink
          to="/facebook-tool"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 mt-4 lg:mt-12 cursor-pointer"
        >
          Launch Tool
        </NavLink>
      ),
      alt: "Facebook",
      name: "Facebook",
      description:
        "Run your Facebook giveaways in seconds - just paste the post link and let Lucky Pick do the rest!",
    },
    {
      img: "./twitter.png",
      customNav: (
        <NavLink
          to="/twitter-tool"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 mt-4 lg:mt-12 cursor-pointer"
        >
          Launch Tool
        </NavLink>
      ),
      alt: "X/Twitter",
      name: "X (Twitter)",
      description:
        "Hosting a giveaway on X? Drop your tweet link and instantly pick your lucky winners!",
    },
    {
      img: "./instagram.png",
      customNav: (
        <NavLink
          to="/instagram-tool"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 mt-4 lg:mt-12 cursor-pointer"
        >
          Launch Tool
        </NavLink>
      ),
      alt: "Instagram",
      name: "Instagram",
      description:
        "Turn your Instagram post comments into fair, random winners - no bias, just luck!",
    },
    {
      img: "./tiktok.png",
      customNav: (
        <NavLink
          to="/tiktok-tool"
          className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 mt-4 lg:mt-12 cursor-pointer"
        >
          Launch Tool
        </NavLink>
      ),
      alt: "TikTok",
      name: "TikTok",
      description:
        "Pick random winners from your TikTok comments and keep your giveaways fun and fair!",
    },
  ];
}

export function Navbar() {
  return [
    {
      name: (
        <NavLink
          to="/"
          className="hover:text-lg transition-all duration-300 cursor-pointer text-black lg:font-bold hover:text-blue-400 block"
        >
          Home
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/facebook-tool"
          className="hover:text-lg transition-all duration-300 cursor-pointer text-black lg:font-bold hover:text-blue-400 block"
        >
          Facebook Tool
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/instagram-tool"
          className="hover:text-lg transition-all duration-300 cursor-pointer text-black lg:font-bold hover:text-blue-400 block"
        >
          Instagram Tool
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/twitter-tool"
          className="hover:text-lg transition-all duration-300 cursor-pointer text-black lg:font-bold hover:text-blue-400 block"
        >
          X Tool
        </NavLink>
      ),
    },
    {
      name: (
        <NavLink
          to="/tiktok-tool"
          className="hover:text-lg transition-all duration-300 cursor-pointer text-black lg:font-bold hover:text-blue-400 block"
        >
          TikTok Tool
        </NavLink>
      ),
    },
  ];
}
