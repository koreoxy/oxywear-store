import React from 'react';
import { useRouter } from 'next/router';

function AccountMenuId() {
  const router = useRouter();
  const accountMenuId = router.query.accountMenuId;
  return <div>AccountMenu {accountMenuId}</div>;
}

export default AccountMenuId;
