import React from "react"
import { IconButton, ListItemSecondaryAction } from "@material-ui/core"
import OpenInNewIcon from "@material-ui/icons/OpenInNew"

export default function ListItemExternalLinkIcon(props) {
  return (
    <ListItemSecondaryAction>
      <IconButton
        edge="end"
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <OpenInNewIcon />
      </IconButton>
    </ListItemSecondaryAction>
  )
}
