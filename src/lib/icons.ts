import {
  Compass,
  Code2,
  Bot,
  Server,
  Users,
  RefreshCw,
  Search,
  PenTool,
  Hammer,
  Rocket,
  type LucideIcon,
} from 'lucide-react'

export const iconMap = {
  Compass,
  Code2,
  Bot,
  Server,
  Users,
  RefreshCw,
  Search,
  PenTool,
  Hammer,
  Rocket,
} satisfies Record<string, LucideIcon>

export type IconName = keyof typeof iconMap
