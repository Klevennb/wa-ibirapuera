import RedoOutlinedIcon from "@mui/icons-material/RedoOutlined";
import UndoOutlinedIcon from "@mui/icons-material/UndoOutlined";
import FormatBoldOutlinedIcon from "@mui/icons-material/FormatBoldOutlined";
import FormatItalicOutlinedIcon from "@mui/icons-material/FormatItalicOutlined";
import FormatUnderlinedOutlinedIcon from "@mui/icons-material/FormatUnderlinedOutlined";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import FormatAlignLeftOutlinedIcon from "@mui/icons-material/FormatAlignLeftOutlined";
import FormatAlignRightOutlinedIcon from "@mui/icons-material/FormatAlignRightOutlined";
import FormatAlignJustifyOutlinedIcon from "@mui/icons-material/FormatAlignJustifyOutlined";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import FormatHeader1 from "mdi-material-ui/FormatHeader1";
import FormatHeader2 from "mdi-material-ui/FormatHeader2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import FormatText from "mdi-material-ui/FormatText";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from "@mui/icons-material/Image";

export const eventTypes = {
  paragraph: "paragraph",
  h1: "h1",
  h2: "h2",
  ul: "ul",
  ol: "ol",
  quote: "quote",
  formatCode: "formatCode",
  formatUndo: "formatUndo",
  formatRedo: "formatRedo",
  formatBold: "formatBold",
  formatItalic: "formatItalic",
  formatUnderline: "formatUnderline",
  formatStrike: "formatStrike",
  formatInsertLink: "formatInsertLink",
  formatAlignLeft: "formatAlignLeft",
  formatAlignCenter: "formatAlignCenter",
  formatAlignRight: "formatAlignRight",
  insertImage: "insertImage",
};

const pluginsList = [
  {
    id: 1,   //B
    Icon: FormatText,
    event: eventTypes.paragraph,
  },
  {
    id: 2,   //B
    Icon: FormatHeader1,
    event: eventTypes.h1,
  },
  {
    id: 3,   //B
    Icon: FormatHeader2,
    event: eventTypes.h2,
  },
  {
    id: 4,   //B
    Icon: FormatListBulletedIcon,
    event: eventTypes.ul,
  },

  {
    id: 5,   //B
    Icon: FormatListNumberedIcon,
    event: eventTypes.ol,
  },
  {
    id: 6,   //B
    Icon: FormatQuoteIcon,
    event: eventTypes.quote,
  },

  {
    id: 7,
    Icon: CodeIcon,   //B
    event: eventTypes.formatCode,
  },
  {
    id: 8,
    Icon: UndoOutlinedIcon,
    event: eventTypes.formatUndo,
  },
  {
    id: 9,
    Icon: RedoOutlinedIcon,
    event: eventTypes.formatRedo,
  },
  {
    id: 10,   //B
    Icon: FormatBoldOutlinedIcon,
    event: eventTypes.formatBold,
  },
  {
    id: 11,
    Icon: FormatItalicOutlinedIcon,
    event: eventTypes.formatItalic,
  },
  {
    id: 12,   //B
    Icon: FormatUnderlinedOutlinedIcon,
    event: eventTypes.formatUnderline,
  },
  {
    id: 13,
    Icon: ImageIcon,   //B
    event: eventTypes.insertImage,
  },
  {
    id: 14,
    Icon: InsertLinkOutlinedIcon,  //B
    event: eventTypes.formatInsertLink,
  },
  {
    id: 15,
    Icon: FormatAlignLeftOutlinedIcon,
    event: eventTypes.formatAlignLeft,
  },

  {
    id: 16,
    Icon: FormatAlignJustifyOutlinedIcon,
    event: eventTypes.formatAlignCenter,
  },
  {
    id: 17,
    Icon: FormatAlignRightOutlinedIcon,
    event: eventTypes.formatAlignRight,
  },
];

export default pluginsList;
