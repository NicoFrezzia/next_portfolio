type EducationItem = {
  institution: string
  degree: string
  date: string
  honors?: string
  gpa?: string

}

const education: EducationItem[] = [
  {
    institution: 'Brigham Young University - Idaho',
    degree: 'Bachelor of Science — Computer Science ',
    gpa: 'GPA: 4.00',
    date: 'September 2024 – April 2028',
  },
  {
    institution: 'Mountainland Technical College',
    degree: 'Web Development Certificate',
    date: 'October 2021',
  },
]

export default education;
