<script lang="ts">
  import AvatarHeading from '@this/components/AvatarHeading';
  import ContactButton from '@this/components/ContactButton';
  import PersonItem from '@this/components/PersonItem';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let official: any = {};
  export let role = '';

  const initials = official.initials;
  const firstName = official.firstName;
  const lastName = official.lastName;
  const gender = official.gender;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-4 lg:p-6">
    <AvatarHeading class="mb-4" {colour} {initials} text="{firstName} {lastName}" />
    <div class="flex flex-col -mb-3">
      <PersonItem class="mb-2" {colour} text={role} />
      {#each official.contactMethods as { type, value }}
        <ContactButton class="mb-2" {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
