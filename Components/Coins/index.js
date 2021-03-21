import styles from './Coins.module.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import Link from 'next/link';
const Coins = ({name, price, symbol, marketcap, id, volume, image, priceChange})=> {
    return (
        <Link href="/coin/[id]" as={`/coin/${id}`}>
            <div className={styles.coin_container}>
                <div className={styles.coin_row}>
                    <div className={styles.coin}>
                        <img src={image} alt="" className={styles.coin_img}/>
                        <h1 className={styles.coin_h1}>{name}</h1>
                        <p className={styles.coin_symbol}>{symbol}</p>
                        <div className={styles.coin_data}>
                            <p className={styles.coin_price}>Price: {'\u20B9'} {price}</p>
                            <p className={styles.coin_volume}>Volume: {'\u20B9'} {volume.toLocaleString()}</p>
                            {
                                priceChange < 0 ? (<p className={styles.coin_percent, styles.red}>
                                    {priceChange.toFixed(2)}% <ArrowDownwardIcon />
                                </p>) : (<p className={styles.coin_percent, styles.green}>
                                    {priceChange.toFixed(2)}% <ArrowUpwardIcon />
                                </p>)
                            }
                            <p className={styles.coin_marketcap}>Mkt Cap: {'\u20B9'} {marketcap.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>    
    )
}

export default Coins
