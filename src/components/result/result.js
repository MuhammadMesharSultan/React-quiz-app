import { Grid, Typography, Box } from '@mui/material';
import './result.css'
import Button from '@mui/material/Button';


function result(props) {

    const { data, quesLength } = props

    // console.log(data, "here");


    return (
        <div className='result'>
            <h2 className='h2'>RESULT :</h2>
            
            <Grid container className='insideResult'>

                {data && Array.isArray(data) && data.length > 0 ? data.map((x, i) => (
                    <Grid className="p-3" key={i} item md={4} >
                        <h2>{x.label}</h2>
                        <h6>{x.value}</h6>
                        {/* <Button variant='contained'>{x.label}{console.log(x)}</Button> */}
                    </Grid>
                    

                )) : null}
            </Grid>
            <Grid container className='insideResult'>
                <Grid className="p-3" item md={4}>
                    <h2>Total No</h2>
                    <h6>pass</h6>
                </Grid>
                <Grid className="p-3" item md={4}>
                    <h2>Percentage</h2>
                    <h6>pass</h6>
                </Grid>
                <Grid className="p-3" item md={4}>
                    <h2>Status</h2>
                    <h6>pass</h6>
                </Grid>
            </Grid>
        </div>
    )


    // data.userScore * 100 


}
export default result;