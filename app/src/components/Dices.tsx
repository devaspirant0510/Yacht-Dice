import {FC} from "react";

interface Props {
    diceNum: number
}

const Dices: FC<Props> = ({diceNum}: Props) => {
    return <div style={{width: 30, height: 30, borderRadius: 12}}>
        {diceNum !== 0 && <>{diceNum}</>}
    </div>
}
export default Dices;