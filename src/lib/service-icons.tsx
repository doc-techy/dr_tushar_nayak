import type { IconType } from "react-icons";
import {
  LuAccessibility,
  LuActivity,
  LuAmbulance,
  LuBone,
  LuDna,
  LuHandHeart,
  LuScan,
  LuStretchHorizontal,
  LuWaves,
} from "react-icons/lu";

export type ServiceIconKey =
  | "kneeReplacement"
  | "hipJointReplacement"
  | "kneeArthroscopy"
  | "backPainManagement"
  | "spinalSurgeries"
  | "sportsInjuries"
  | "arthritis"
  | "traumaManagement"
  | "physiotherapy";

const iconMap: Record<ServiceIconKey, IconType> = {
  kneeReplacement: LuBone,
  hipJointReplacement: LuAccessibility,
  kneeArthroscopy: LuScan,
  backPainManagement: LuStretchHorizontal,
  spinalSurgeries: LuDna,
  sportsInjuries: LuActivity,
  arthritis: LuHandHeart,
  traumaManagement: LuAmbulance,
  physiotherapy: LuWaves,
};

export function renderServiceIcon(key: ServiceIconKey, className = "h-10 w-10 text-brand-teal") {
  const Icon = iconMap[key];

  if (!Icon) {
    return <span className={className} />;
  }

  return <Icon className={className} aria-hidden />;
}

