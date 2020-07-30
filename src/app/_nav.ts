import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'User Manager',
    url: '/user-list',
    icon: 'icon-star',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'Chart By Date',
    url: '/chart-date',
    icon: 'icon-chart'
  },
  {
    name: 'Chart By Month',
    url: '/chart-month',
    icon: 'icon-chart'
  }
];
