
import { makeStyles } from "@material-ui/core/styles";


const formStyles = makeStyles((theme) => ({
	ctaBtn: {
		margin: "0 auto",
		marginTop: "60px",
		display: "block",
		background: "#3A8DFF",
		borderRadius: "3px",
		color: "#fff",
		fontWeight: 700,
		fontSize: "16px",
		boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.35)",
		width: "160px",
		height: "56px",
	},
	form: {
		"& > div": {
			marginTop: "20px",
			[theme.breakpoints.up("md")]: {
				marginTop: "38px",
			},
		},
	},
}));

export default formStyles