<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import EmptyButton from '@this/components/button/EmptyButton';
  import PersonItem from '@this/components/common/PersonItem';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let role = '';

  const colour = personBackground[personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 bg-gray-50 p-4 lg:p-6">
    <AvatarHeading class="flex items-center mb-4" {colour} initials="TBD" text="To Be Determined" />
    <div class="flex flex-col -mb-3">
      <PersonItem class="mb-2" {colour} text={role} />
      <EmptyButton class="mb-2" />
      <EmptyButton class="mb-2" />
    </div>
  </div>
</div>
