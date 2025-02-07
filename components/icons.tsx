/**
 * Icons used in the app
 * @filename icons.ts
 *
 */
import { SunIcon, MoonIcon, TwitterLogoIcon, ComponentInstanceIcon } from "@radix-ui/react-icons"
import type { IconProps } from "@radix-ui/react-icons/dist/types"

export type Icon = React.ForwardRefExoticComponent<IconProps & React.RefAttributes<SVGSVGElement>>

export const Icons = {
  sun: SunIcon,
  moon: MoonIcon,
  twitter: TwitterLogoIcon,
  logo: ComponentInstanceIcon,
}
