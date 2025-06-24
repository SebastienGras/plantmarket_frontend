import { Box, Card, useTheme } from "@mui/material";
import { JSX } from "react";
import Slider from "react-slick";

import { settings } from "./carouselSettings";
import ArrowLeft from "./components/ArrowLeft";
import ArrowRight from "./components/ArrowRight";

type CarouselProps<T extends { id: string }> = {
  datas: T[];
  renderItem: (item: T) => JSX.Element;
};

const Carousel = <T extends { id: string }>({
  datas,
  renderItem,
}: CarouselProps<T>): JSX.Element => {
  const theme = useTheme();

  const settingsToUse = {
    ...settings,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
  };

  if (!datas || datas.length === 0) {
    return <></>;
  }

  return (
    <Box
      sx={{
        px: 4,
        ".slick-slide": {
          padding: theme.spacing(1),
        },
      }}
    >
      <Slider {...settingsToUse}>
        {datas.map((data) => (
          <Box key={data.id}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 2,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 6,
                },
              }}
            >
              {renderItem(data)}
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
