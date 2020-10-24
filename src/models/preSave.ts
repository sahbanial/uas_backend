import moment from "../helpers/moment";
export const createdAt = schema => {
    schema.pre("save", function() {
      if (this.isNew) {
        this.createdAt = moment().valueOf();
        if (!this.id) this.id = this._id.toString();
        else this._id = this.id;
      } else this.updatedAt = moment().valueOf();
    });
  };
  