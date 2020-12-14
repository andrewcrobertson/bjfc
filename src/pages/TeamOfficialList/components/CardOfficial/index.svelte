<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import PhoneButton from '@this/components/PhoneButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import EmojiHappyIcon from '@this/icons/EmojiHappyIcon';

  let rootClass = '';
  export { rootClass as class };
  export let official: any = {};
  export let role = '';

  const { initials, firstName, familyName, phone, email, gender } = official;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font ml-2">{firstName} {familyName}</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <div class="mb-2 cursor-default px-6 py-3 inline-flex items-center leading-none text-sm border border-gray-300 border-dotted">
        <EmojiHappyIcon class="inline w-5 h-5 mr-1 text-{colour}-500" />Role:
        {role}
      </div>
      <PhoneButton class="mb-2" label="Phone" {phone} {colour} />
      <EmailButton class="mb-2" label="Email" {email} {colour} />
    </div>
  </div>
</div>
