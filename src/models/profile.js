import mongoose from "mongoose";
const ProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    bio: {
      type: String,
      default: ""
    },
    skills: {
      type: [String],
     default:[]
    },
    github_Url: {
      type: String,
      default: ""
    },
    linkedin_url: {
      type: String,
      default: ""
    },
    x_Url: {
      type: String,
      default: ""
    },
    portfolio_Url: {
      type: String,
      default: ""
    },
    resume_Url: {
      type: String,
      default: ""
    },
    currentCompany: {
      type: String,
      default: ""
    },
    currentRole: {
      type: String,
      default: ""
    },
    referralAvailability: {
      type: Boolean,
      default: false,
    },
    batch: {
      type: String,
      default: ""
    },
  },
  {
    timestamps:true
  }
);

const ProfileModel = mongoose.model("profile", ProfileSchema);

export { ProfileModel };
