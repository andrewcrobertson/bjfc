<script lang="ts">
  import * as personGenderEnum from '@this/constants/personGenderEnum';
  import { personBackground } from '@this/constants/theme';
  import EmailButton from '../EmailButton';
  import PhoneButton from '../PhoneButton';

  let rootClass = '';
  export { rootClass as class };
  export let guardian: any = {};

  const { initials, firstName, familyName, phone1, phone2, mobile, email, gender } = guardian;
  const colour = personBackground[gender ?? personGenderEnum.unknown];
</script>

<div class={rootClass}>
  <div class="border border-gray-300 p-6">
    <div class="flex items-center mb-4">
      <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-{colour}-100 text-{colour}-500">{initials}</div>
      <h2 class="text-lg font-medium title-font ml-2">{firstName} {familyName}</h2>
    </div>
    <div class="flex flex-col -mb-3">
      <PhoneButton class="mb-2" label="Phone 1" phone={phone1} />
      <PhoneButton class="mb-2" label="Phone 2" phone={phone2} />
      <PhoneButton class="mb-2" label="Mobile" phone={mobile} />
      <EmailButton class="mb-2" label="Email" {email} />
    </div>
  </div>
</div>
