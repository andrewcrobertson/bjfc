<script lang="ts">
  import AvatarHeading from '@this/components/common/AvatarHeading';
  import ContactButton from '@this/components/button/ContactButton';
  import PersonItem from '@this/components/common/PersonItem';
  import * as personGenderEnum from '@this/scripts/constants/personGenderEnum';
  import { personBackground } from '@this/scripts/constants/theme';
  import type { IOfficial } from '../../state';

  let rootClass = '';
  export { rootClass as class };
  export let official: IOfficial;
  export let role = '';

  const initials = official?.initials ?? 'TBD';
  const text = official === null ? 'To Be Determined' : `${official.firstName} ${official.lastName}`;
  const emptyContactMethod = { type: null, value: null };
  const contactMethods = official?.contactMethods ?? [emptyContactMethod, emptyContactMethod];
  const colour = personBackground[official?.gender ?? personGenderEnum.unknown];
</script>

<div class="{rootClass} border border-gray-300 p-4 lg:p-6">
  <AvatarHeading {colour} {initials} {text} />
  <div class="flex flex-col text-sm">
    <PersonItem class="mt-2" {colour} text={role} />
    {#each contactMethods as { type, value }}
      <ContactButton class="mt-2" {type} {value} {colour} />
    {/each}
  </div>
</div>
