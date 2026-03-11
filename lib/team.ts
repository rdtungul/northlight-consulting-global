export interface TeamMember {
  name:  string;
  title: string;
  photo: string;
}

export const team: TeamMember[] = [
  { name: 'Alex Rivera',   title: 'Founder & CEO',        photo: '/images/team/alex.jpg' },
  { name: 'Jordan Lee',    title: 'Head of SEO Strategy', photo: '/images/team/jordan.jpg' },
  { name: 'Morgan Smith',  title: 'Creative Director',    photo: '/images/team/morgan.jpg' },
  { name: 'Taylor Brooks', title: 'Paid Media Lead',      photo: '/images/team/taylor.jpg' },
];
