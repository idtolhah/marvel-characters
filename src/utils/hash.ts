import * as crypto from 'crypto';
import { PRIVATE_KEY, PUBLIC_KEY } from '../constants/key-constants';

const ts = +new Date;
const hash = () => crypto.createHash('md5').update(ts + PRIVATE_KEY + PUBLIC_KEY).digest("hex");

export {
    ts,
    hash
}