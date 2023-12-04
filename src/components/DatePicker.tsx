import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/green.css";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import { Button, IconButton, InputAdornment, TextField } from "@mui/material";
import { FaCalendarDays } from "react-icons/fa6";

function DatePickers({ value, onChange, setTodayDate, minDate, label }: any) {
  return (
    <div>
      <DatePicker
        value={value}
        onChange={onChange}
        className="font-IRANSansX"
        containerClassName="w-full"
        render={(value, openCalendar) => {
          return (
            <TextField
              onFocus={openCalendar}
              value={value}
              label={label}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={openCalendar}>
                      <FaCalendarDays sx={{ fontSize: 22 }} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          );
        }}
        plugins={[weekends()]}
        minDate={minDate || undefined}
      >
        {setTodayDate && (
          <Button
            sx={{ mt: -1, mb: 1, width: "90%" }}
            variant="contained"
            onClick={setTodayDate}
          >
            امروز
          </Button>
        )}
      </DatePicker>
    </div>
  );
}

export default DatePickers;
