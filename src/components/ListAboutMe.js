import { Collapse, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/300.css';


export default function ListAboutMe({ title, content }) {
  const [expanded, setExpanded] = useState(-1);
  const toggleExpand = (index) => {
    if (expanded === index) {
      setExpanded(-1);
    } else {
      setExpanded(index);
    }
  };

  return (
    <StyledContainerData>
      <List style={{padding:'10px', marginTop:'5px',marginBottom:'10px',overflowY:'auto'}}>
        <ListItem button onClick={() => toggleExpand(0)}>
          <ListItemText primary={<Typography variant="body1" style={{ fontWeight: 'bold' }} >{title} </Typography>} />
          {expanded === 0 ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={expanded === 0} timeout="auto" unmountOnExit>
          <div style={{ padding: '16px', fontFamily:'Roboto', textAlign:'justify', maxHeight:'400px' }}>
            {content}
          </div>
        </Collapse>

        {/* Repita os itens para outros conteúdos */}
      </List>
    </StyledContainerData>
  )

}

const StyledContainerData = styled(Paper)`

`;