export interface CaseStudy {
  client:   string;
  industry: string;
  service:  string;
  result:   string;
  image:    string;
  tags:     string[];
}

export const caseStudies: CaseStudy[] = [
  {
    client:   'Apex Legal Group',
    industry: 'Legal',
    service:  'SEO + PPC',
    result:   '287% increase in organic leads in 6 months',
    image:    '/images/cases/apex-legal.jpg',
    tags:     ['SEO', 'PPC', 'Legal'],
  },
  {
    client:   'GreenRoot HVAC',
    industry: 'Home Services',
    service:  'Website Design + Local SEO',
    result:   '4× increase in service calls within 90 days',
    image:    '/images/cases/greenroot.jpg',
    tags:     ['Website Design', 'SEO', 'Home Services'],
  },
  {
    client:   'Radiance MedSpa',
    industry: 'Medical / Healthcare',
    service:  'Social Media + Email/SMS',
    result:   '63% boost in repeat bookings via automation',
    image:    '/images/cases/radiance.jpg',
    tags:     ['Social Media', 'Email/SMS', 'Healthcare'],
  },
  {
    client:   'Summit B2B Solutions',
    industry: 'B2B',
    service:  'CRM / Zoho + AI Automation',
    result:   'Reduced sales cycle from 45 days to 18 days',
    image:    '/images/cases/summit.jpg',
    tags:     ['CRM', 'AI Automation', 'B2B'],
  },
];
