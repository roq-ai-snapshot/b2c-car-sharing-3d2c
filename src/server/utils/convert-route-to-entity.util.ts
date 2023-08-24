const mapping: Record<string, string> = {
  bookings: 'booking',
  cars: 'car',
  companies: 'company',
  invites: 'invite',
  locations: 'location',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
