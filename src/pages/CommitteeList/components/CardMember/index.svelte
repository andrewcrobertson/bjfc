<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import ContactButton from '@this/components/ContactButton';
  import PersonItem from '@this/components/PersonItem';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let member: any = {};

  const { initials, firstName, lastName, gender, role } = member;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class="{rootClass} p-2 sm:p-4">
  <div class="border border-gray-300 p-4 lg:p-6">
    <AvatarHeading class="mb-4" {colour} {initials} text="{firstName} {lastName}" />
    <div class="flex flex-col -mb-3">
      <PersonItem class="mb-2" {colour} text={role} />
      {#each member.contacts as { type, value }}
        <ContactButton {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
