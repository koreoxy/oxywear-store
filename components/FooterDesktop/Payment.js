import styles from './styles.module.scss';

export default function Payment() {
  return (
    <div className={styles.footer__payment}>
      <h3>WE ACCPET</h3>
      <div className={styles.footer__flexwrap}>
        <img src="../../../Image/payment/visa.webp" alt="" />
        <img src="../../../Image/payment/mastercard.webp" alt="" />
        <img src="../../../Image/payment/paypal.webp" alt="" />
      </div>
    </div>
  );
}
