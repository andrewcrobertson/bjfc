<script lang="ts">
  import * as personGenderEnum from '@this/scripts/constants/personGenderEnum';
  import { personBackground } from '@this/scripts/constants/theme';
  import PersonLabelledIcon from '@this/components/labelledIcon/PersonLabelledIcon';

  let rootClass = '';
  export { rootClass as class };
  export let text = '';
  export let colour = personBackground[personGenderEnum.unknown];
</script>

<div class="{rootClass} inline-flex items-center border border-gray-300 border-dotted px-3 py-3">
  <PersonLabelledIcon iconClass="text-{colour}-500" {text} />
</div>
