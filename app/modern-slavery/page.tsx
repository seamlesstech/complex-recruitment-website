import type { Metadata } from 'next';
import { LegalList, LegalPage, type LegalSection } from '../../components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'Modern Slavery Statement | Complex Recruitment',
  description: 'The Modern Slavery and Human Trafficking Statement of Complex Recruitment Ltd for the financial year 2025-2026.',
  openGraph: {
    title: 'Modern Slavery Statement | Complex Recruitment',
    description: 'The Modern Slavery and Human Trafficking Statement of Complex Recruitment Ltd for the financial year 2025-2026.',
  },
};

// Statement text is carried over word for word from the approved statement on
// the previous website (Financial Year 2025-2026). Only layout has changed.
const sections: readonly LegalSection[] = [
  {
    title: 'Organisation Structure and Business',
    body: [
      'Complex Recruitment Ltd (Company No. 10980984) is headquartered at Unit 1 Georgiou Business Park, Second Avenue, London N18 2PG.',
      'The business operates exclusively on a PAYE basis, meaning all workers engaged through Complex Recruitment are paid directly as employees rather than through umbrella, self-employed or third-party payroll arrangements. This model is central to our commitment to fair, transparent and legally compliant employment.',
      'Our clients include logistics operators, national retailers and distribution businesses across Greater London and the surrounding regions. Complex Recruitment operates in accordance with the Employment Agencies Act 1973 and the Conduct of Employment Agencies and Employment Businesses Regulations 2003.',
    ],
  },
  {
    title: 'Our Supply Chains',
    body: [
      'The primary service we deliver is the placement of workers with client businesses, meaning our workforce is our supply chain in most practical respects.',
      'Our key supply chain relationships include:',
      <LegalList key="chains" items={[
        'Workers and candidates who register with Complex Recruitment',
        'Clients in the logistics, warehousing, retail distribution and construction sectors',
        'Payroll, HR and compliance software providers',
        'Training and certification providers, including CPC and driver assessment services',
        'Background screening and right-to-work verification providers',
      ]} />,
      'We recognise that the sectors in which we operate attract a diverse workforce, and we are committed to ensuring that all workers engaged through us are treated fairly, paid correctly and fully aware of their rights.',
    ],
  },
  {
    title: 'Policies in Relation to Slavery and Human Trafficking',
    body: [
      'Complex Recruitment maintains a number of internal policies that directly and indirectly address the risks of modern slavery and human trafficking, including:',
      <LegalList key="policies" items={[
        'Equal Opportunities Policy – all workers are treated fairly regardless of background, nationality or status',
        'Right-to-Work Policy – all candidates have their entitlement to work in the UK verified prior to placement',
        'Pay Policy – all workers are paid at or above the National Living Wage via PAYE with no unlawful deductions',
        'Complaints & Grievance Procedure – a confidential route for workers to raise concerns without fear of detriment',
        'Anti-Bribery & Corruption Policy – prohibits improper inducements that could be used to coerce workers',
      ]} />,
    ],
  },
  {
    title: 'Due Diligence Processes',
    body: [
      'Every candidate registered with Complex Recruitment is subject to a structured compliance process before being placed with a client, including:',
      <LegalList key="diligence" items={[
        'Face-to-face or video identity verification',
        'Right-to-work document checks in line with Home Office guidance',
        'Signed contractual terms confirming pay, working hours and employment rights',
        'Confirmation that the candidate has not paid any fee to secure work',
      ]} />,
      'Prior to accepting new client instructions, Complex Recruitment reviews the nature of the role and site environment. We do not accept briefs that require below-minimum-wage rates or excessive shift lengths. Where we engage third-party providers, we assess their business practices to ensure ethical employment standards are maintained.',
    ],
  },
  {
    title: 'Risk Assessment',
    body: [
      'We assess modern slavery risk across the workers we place and the clients we serve. The areas we consider include:',
      <LegalList key="risk" items={[
        'Workers recruited via informal referral networks – mitigated by our direct registration process and prohibition on candidate fees',
        'Non-UK nationals unfamiliar with employment rights – mitigated by clear written terms and translated materials available on request',
        'Cash-in-hand or off-payroll arrangements – mitigated by our PAYE-only operating model',
        'Client sites with limited labour oversight – mitigated by regular worker contact during active placements',
      ]} />,
    ],
  },
  {
    title: 'Training and Awareness',
    body: [
      'All consultants and compliance staff receive training covering:',
      <LegalList key="training" items={[
        'The key provisions of the Modern Slavery Act 2015',
        'How to identify indicators of forced labour, debt bondage and trafficking',
        'The correct process for escalating concerns internally',
        'Relevant external reporting channels, including the Modern Slavery Helpline (08000 121 700) and the National Referral Mechanism',
      ]} />,
      'Training is reviewed annually and updated in line with changes to guidance from the Home Office or other relevant bodies.',
      'Any worker, member of staff or third party who suspects an instance of modern slavery or labour exploitation is encouraged to report this without delay – internally to a senior manager, via the Modern Slavery Helpline on 08000 121 700, or to the police. Complex Recruitment will not tolerate any retaliation against individuals who raise concerns in good faith.',
    ],
  },
  {
    title: 'Measuring Effectiveness',
    body: [
      'We monitor the effectiveness of our controls through the following indicators:',
      <LegalList key="kpis" items={[
        '100% of candidates completing right-to-work checks before first placement',
        '100% of workers paid via PAYE with no deductions beyond statutory requirements',
        'Zero instances of candidate fees being charged',
        'Annual completion of modern slavery awareness training by all compliance staff',
        'Review of any internal concerns raised and their outcomes, conducted annually by management',
      ]} />,
    ],
  },
  {
    title: 'Approval & Sign-Off',
    body: [
      'This statement has been reviewed and approved by the board of directors of Complex Recruitment Ltd for the financial year 2025-2026. It will be reviewed no later than April 2027.',
      <address key="signoff" className="m-0 mt-2 max-w-[68ch] border-l-[3px] border-brand-red pl-5 text-[15px] not-italic leading-[1.8] text-[#4f5a60]">
        Signed on behalf of Complex Recruitment Ltd: Munyati<br />
        Director<br />
        Complex Recruitment Ltd<br />
        Date: 01/04/2026
      </address>,
    ],
  },
];

export default function ModernSlaveryPage() {
  return (
    <LegalPage
      kicker="MODERN SLAVERY STATEMENT"
      title="Modern Slavery & Human Trafficking Statement"
      intro="Complex Recruitment Ltd | Financial Year 2025-2026"
      meta="NEXT REVIEW · NO LATER THAN APRIL 2027"
      sections={sections}
    />
  );
}
