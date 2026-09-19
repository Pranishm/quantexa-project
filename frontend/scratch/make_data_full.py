import json

transcript_path = "/Users/pranish/.gemini/antigravity-ide/brain/6dea7e2c-dc46-4978-8816-a790dde0b0b5/.system_generated/logs/transcript_full.jsonl"
last_user_text = ""

with open(transcript_path, "r", encoding="utf-8") as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get("type") == "USER_INPUT":
                content = data.get("content", "")
                if "1INCH\t2021-01-08" in content:
                    last_user_text = content
        except Exception:
            pass

print("Found user text len in full transcript:", len(last_user_text))

lines = last_user_text.splitlines()
rows = []
for l in lines:
    parts = l.strip().split("\t")
    if len(parts) == 6 and parts[0] == "1INCH" and parts[1] != "date":
        ticker, date_str, o, h, l_val, c = parts
        # If last part has trailing dots or user message, clean it
        if " " in c:
            c = c.split(" ")[0]
        if c.endswith("."):
            c = c[:-1]
        try:
            open_val = float(o)
            high_val = float(h)
            low_val = float(l_val)
            close_val = float(c)
            ret = abs(close_val - open_val) / max(open_val, 0.001)
            vol = int(15_000_000 * (1 + ret * 10) * (0.8 + ((hash(date_str) % 50) / 100)))
            rows.append({
                "time": date_str,
                "open": open_val,
                "high": high_val,
                "low": low_val,
                "close": close_val,
                "volume": vol
            })
        except ValueError as e:
            # print error for debugging
            # print(f"Error parsing line: {l} => {e}")
            pass

print(f"Extracted {len(rows)} rows for 1INCH from full transcript.")
if rows:
    print("First:", rows[0])
    print("Last:", rows[-1])

    with open("lib/demo-data/one-inch-ohlcv.ts", "w", encoding="utf-8") as out:
        out.write('import type { OHLCVBar } from "./ohlcv";\n\n')
        out.write('export const ONE_INCH_OHLCV: OHLCVBar[] = ')
        json.dump(rows, out, indent=2)
        out.write(';\n')
    print("Wrote lib/demo-data/one-inch-ohlcv.ts successfully with full dataset.")

