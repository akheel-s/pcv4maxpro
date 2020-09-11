import { ref } from '@vue/composition-api';

const items = ref([
  { title: 'Detail', color: 'purple' },
  { title: 'Manage', color: 'blue' },
  { title: 'Participant', color: 'green' },
  { title: 'Stakeholder', color: 'red' }
]);

export default items;
