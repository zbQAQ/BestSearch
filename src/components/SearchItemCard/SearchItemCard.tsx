
import { CardContent, Typography, Card, CardHeader } from '@mui/material';
import { grey } from '@mui/material/colors'
import { useMemo } from 'react';
import { AreaChart, Area, ResponsiveContainer } from 'recharts';
import { IProductTrend } from '../../api/product'
import { useParams } from "react-router-dom"
import HighlightWords from "../HighlightWords/HighlightWords"
import dayjs from 'dayjs';

export default function SearchItemCard(props: IProductTrend) {
    const { keyword = '' } = useParams()
    const { name, search_msv, growth } = props

  const time = useMemo(() => {
    const format = "MMM YYYY"
    const { search_msv } = props
    const start = dayjs(search_msv[0].date).format(format)
    const end = dayjs(search_msv[search_msv.length - 1].date).format(format)
    return start +  ' - ' + end
  }, [props])

  const highlightKeyworks = useMemo(() => keyword.split('+'),[keyword])

  return (
    <Card variant="outlined" sx={{ display: "flex", flexDirection: "column" }}>
      <CardHeader
        disableTypography={true}
        title={
          <Typography sx={{ fontSize: "1.4rem", fontWeight: 100 }}>
            <HighlightWords keywords={highlightKeyworks} text={name} />
          </Typography>
        }
        subheader={
          <Typography sx={{ fontSize: "1rem", color: "grey.500" }}>
            Growth {growth}%
          </Typography>
        }
      />
      <CardContent sx={{ flexGrow: 1, padding: 0, ":last-child": { pb: 0 } }}>
        <ResponsiveContainer width="100%" height={200}>
            <AreaChart
              data={search_msv}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
            >
              <Area type="monotone" dataKey="sv" stroke="#82ca9d" fill="#82ca9d" />
            </AreaChart>
          </ResponsiveContainer>
        <Typography sx={{
          lineHeight: "2.4rem",
          textAlign: "center",
          color: grey[500]
        }}>
          {time}
        </Typography>
      </CardContent>
    </Card>
  )
}

export { SearchItemSkeleton } from './SearchItemSkeleton';