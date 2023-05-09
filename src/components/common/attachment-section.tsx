import * as React from 'react'

import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContentText from '@mui/material/DialogContentText'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import Dialog from '@mui/material/Dialog'
import Button from '@mui/material/Button'

import Paper, { PaperProps } from '@mui/material/Paper'
import Draggable from 'react-draggable'
import DocIcon from '../../assets/icons/post-detail/doc.svg'
import Image from 'next/image'
import CloudDownload from '@mui/icons-material/CloudDownload'
import styles from './attachment-section.module.scss'
import Preloader from './preloader'

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  )
}

const AttachmentSection = (props: any) => {
  const { name, url } = props.attachment.file
  const attachmentIndex: number = props.i + 1
  const [open, setOpen] = React.useState(false)

  const fileName: string = name
  const ext = fileName.split('.').pop()
  const fileExtension = ext?.toLowerCase()

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <>
      {url == null && <Preloader />}
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <a
          className={styles.postDetail__postAttachment_section}
          // href={url}
          // target="_blank"
          rel="noopener noreferrer"
          // download={attachment.file.name}
          title={`Attachment ${attachmentIndex}`}
          onClick={handleClickOpen}
        >
          <Image alt="Attachment" src={DocIcon} />
          <Typography color="primary">Att. {attachmentIndex}</Typography>
          <Typography color="primary">
            ({fileExtension?.toUpperCase()})
          </Typography>
        </a>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Doc {attachmentIndex} ( {fileExtension?.toUpperCase()} File )
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className={styles.postDetail__img_container}>
              {fileExtension == 'jpg' ||
              fileExtension == 'jpeg' ||
              fileExtension == 'png' ? (
                <img src={url} alt={`${name}`} />
              ) : (
                'No Preview Available'
              )}
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button>
            <a
              href={url}
              title="Download"
              target="_blank"
              download
              rel="noreferrer"
            >
              <CloudDownload color="primary" fontSize="large" />
            </a>
          </Button>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AttachmentSection
