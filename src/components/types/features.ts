export interface TeamMember {
    id: number
    name: string
    role: string
    image: string
    skills: string[]
    isActive?: boolean
}
  
export interface ChecklistItem {
  id: number
  label: string
  completed: boolean
}