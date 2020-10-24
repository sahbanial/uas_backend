const COST =3.3;
export default {
    costDelivring: (_, { filter }) => (_?.distance*COST /1000 )?.toFixed(2),
    distance :(_)=> (_?.distance /1000)?.toFixed(2)
};
