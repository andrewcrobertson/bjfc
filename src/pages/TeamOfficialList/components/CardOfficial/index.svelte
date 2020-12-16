<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import ContactButton from '@this/components/ContactButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import RoleItem from '../RoleItem';

  let rootClass = '';
  export { rootClass as class };
  export let official: any = {};
  export let role = '';

  const { initials, firstName, lastName, phone, email, gender } = official;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-4 lg:p-6">
    <AvatarHeading class="mb-4" {colour} {initials} text="{firstName} {lastName}" />
    <div class="flex flex-col -mb-3">
      <RoleItem class="mb-2" {colour} {role} />
      {#each official.contacts as { type, value }}
        <ContactButton {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
