import * as Stripe from 'stripe';
const secretKey = 'sk_test_X5KuJ3uuq3Ktjg3aQOjoLRdC00cPWoI5ts';
const publicKey = 'pk_test_aZ6WqOrDWOMN8H5d3gjy0nyn00FAFiuUSj';
export default new Stripe(secretKey);
