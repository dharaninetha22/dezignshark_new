import React from "react";
import { Box, Container, Table, TableBody, TableCell, TableRow } from "@mui/material";
import { Home } from "../../assets";




// Sample brand logos array
const brandLogos = [
    [ Home.clientlogo,  Home.clientlogo, Home.clientlogo, Home.clientlogo, Home.clientlogo,Home.clientlogo,],
    [ Home.clientlogo, Home.clientlogo, Home.clientlogo, Home.clientlogo, Home.clientlogo,Home.clientlogo,],
];

const BrandSection: React.FC = () => {
  return (
    <Box sx={{ py: 10, backgroundColor: "#fff" }}>
      <Container maxWidth="xl">
        {/* Table Layout */}
        <Table sx={{ width: "100%", borderCollapse: "collapse", border: "1px solid #f1f1f1" }}>
          <TableBody>
            {brandLogos.map((row, rowIndex) => (
              <TableRow key={rowIndex} sx={{ borderBottom: "1px solid #e0e0e0" }}>
                {row.map((brand, index) => (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      borderRight: index !== row.length - 1 ? "1px solid #f1f1f1" : "none",
                      borderTop: "1px solid #f1f1f1", // Add top border
                      py: 4,
                      width: "20%", // 5 columns per row
                    }}
                  >
                    <Box
                      component="img"
                      src={brand}
                      alt="Brand Logo"
                      sx={{
                        maxWidth: "150px",
                        height: "auto",
                        filter: "brightness(0)", // Make it black
                        transition: "filter 0.3s ease-in-out", // Smooth transition
                        "&:hover": { filter: "brightness(0.5)" }, // Gray effect on hover
                      }}
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Container>
    </Box>
  );
};

export default BrandSection;
