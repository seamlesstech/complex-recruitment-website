'use client';

import { SectorEnquiryForm, type SectorEnquiryConfig } from '../../../components/sectors/SectorEnquiryForm';

const config: SectorEnquiryConfig = {
  sourcePage: '/sectors/driving',
  sector: 'Driving & Transport',
  intent: 'I need drivers',
  title: 'Book a driver',
  support: 'Tell us the class, start time and site — we’ll confirm availability fast.',
  action: 'Request Drivers',
  pairedDrivingFields: true,
  fields: [
    { name: 'driverClass', requestKey: 'role', label: 'Driver class', options: ['HGV Class 1', 'HGV Class 2', '7.5t', 'Van / 3.5t', 'HIAB / Moffett', 'ADR', 'Other driving requirement'] },
    { name: 'location', label: 'Location', placeholder: 'Site postcode or location' },
    { name: 'startDate', label: 'Start date', type: 'date' },
    { name: 'numberOfDrivers', requestKey: 'headcount', label: 'Number of drivers', type: 'number' },
    { name: 'notes', label: 'Optional notes', type: 'textarea', optional: true, placeholder: 'Shift, start time, vehicle, assignment length or anything else we should know' },
  ],
};

export function BookDriverForm() {
  return <SectorEnquiryForm config={config} id="book-driver" />;
}
