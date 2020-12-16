<script lang="ts">
  import EmailButton from '@this/components/EmailButton';
  import PhoneButton from '@this/components/PhoneButton';
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';

  let rootClass = '';
  export { rootClass as class };
  export let contact: any = {};

  const { phone1, phone2, email1, email2 } = contact;
  const colour = personBackground[personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-4 lg:p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">RC</div>
      <h2 class="text-lg font-medium title-font ml-2">Registered Contact</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <PhoneButton class="mb-2" phone={phone1} {colour} />
      <PhoneButton class="mb-2" phone={phone2} {colour} />
      <EmailButton class="mb-2" email={email1} {colour} />
      <EmailButton class="mb-2" email={email2} {colour} />
    </div>
  </div>
</div>
