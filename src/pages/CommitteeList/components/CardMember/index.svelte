<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import ContactButton from '@this/components/button/ContactButton';
  import PersonItem from '@this/components/common/PersonItem';
  import * as personGenderEnum from '@this/utility/constants/personGenderEnum';
  import { personBackground } from '@this/utility/constants/theme';
  import type { IMember } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let member: IMember;

  const initials = member.initials;
  const text = `${member.firstName} ${member.lastName}`;
  const colour = personBackground[member.gender ?? personGenderEnum.unknown];
</script>

<div class="{rootClass} p-2 sm:p-4">
  <div class="border border-gray-300 p-4 lg:p-6">
    <AvatarHeading {colour} {initials} {text} />
    <div class="flex flex-col text-sm">
      <PersonItem class="mt-2" {colour} text={member.role} />
      {#each member.contactMethods as { type, value }}
        <ContactButton class="mt-2" {type} {value} {colour} />
      {/each}
    </div>
  </div>
</div>
