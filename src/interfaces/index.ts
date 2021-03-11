// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import User from 'path/to/interfaces';

import { IconSlugsType } from '../components/Icon'

export interface StringMap {
  [key: string]: string
}

export interface Polo {
  name: string
  address: string
  email: string
  phone: string
}
export interface Tenant {
  polos?: Polo[]
  name: string
  nameAbbreviation: string
  title: string
  faviconPath: string
  logoPath: string
  gtmId: string
  email?: string
  phoneNumber?: string
  whatsappNumber?: string
}

export type CoursePlanMode = 'tradicional' | 'intensivo'
export interface CoursePlan {
  mode: CoursePlanMode
  installment: number
  total: number
}

export interface CourseLocation {
  id: string
  name: string
}

export interface Professor {
  id: string
  avatarPath: string
  coordinator: boolean
  name: string
  topic: string
  resume: string
  resumeUrl: string
}

export interface CourseAdvantage {
  title: string
  description: string
  titleSuffix: string
}

export interface CourseArea {
  id: string
  name: string
  courses?: Course[]
  iconPath: IconSlugsType
}
export interface Course {
  imagePath: string
  bannerImagePath: string
  id: string
  originalPlan: CoursePlan
  currentPlan: CoursePlan
  name: string
  description: string
  startAt?: string
  duration?: string
  area?: CourseArea
  location?: CourseLocation
  targetAudienceText?: string
  topicsText: string
  topics: string[]
  professors?: Professor[]
  advantages?: CourseAdvantage[]
  mode?: CoursePlanMode
  installment?: string
}
export interface FormAddress {
  zipCode: string
  state: string
  city: string
  district: string
  street: string
  number: string
  complement?: string
}

export interface FormCourse {
  name?: string
  area?: string
  mode?: string
  installment?: string
}
export interface FormDataOrigin {
  origin?: string
  area?: string
  name?: string
  email?: string
  phone?: string
  cpf?: string
  newsletter?: boolean
  privacyPolicy?: boolean
  whatsapp?: boolean
  isCollaborator?: boolean
  isExStudent?: boolean
  graduation?: boolean
  graduationDate?: string
  polo?: string
  course?: FormCourse
  address?: FormAddress
}

declare global {
  interface Window {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    dataLayer: any
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    ga: any
  }
}

export interface ItemFaq {
  title: string
  content: string[]
}

declare global {
  interface Window {
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    dataLayer: any
    /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
    ga: any
  }
}
