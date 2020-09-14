import { ref } from '@vue/composition-api';

export const tableItems = ref([
  { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
  { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
  { title: 'Participant', image: 'https://picsum.photos/510/300?random' },
  { title: 'Detail', image: 'https://picsum.photos/510/300?random' },
  { title: 'Manage', image: 'https://picsum.photos/510/300?random' },
  { title: 'Participant', image: 'https://picsum.photos/510/300?random' }
]);
export const filterChips = ref([
  {
    label: 'Outcomes',
    color: 'green'
  },
  {
    label: 'Participants',
    color: 'blue'
  },
  {
    label: 'Projects',
    color: 'red'
  }
]);
