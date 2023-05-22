import Link from 'next/link';
import Layout from '../../components/Layout';
import AccountMenu from '../../components/AccountMenu';

export default function Page() {
  return (
    <Layout title="My Account">
      <AccountMenu
        title="My Account"
        main={[
          <div className="w-[608px]" key="">
            <h1>
              Hello <b>Admin</b> (not <b>Admin</b>? Log Out)
            </h1>
            <p>
              From your account dashboard you can view your recent orders,
              manage your shipping and billing addresses, and edit your password
              and account details.
            </p>
          </div>,
        ]}
      />
      <main></main>
    </Layout>
  );
}
